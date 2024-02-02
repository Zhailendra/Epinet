import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeflex/primeflex.css';
import style from "../styles/activitygrid.module.scss";
import {fetchActivities} from "../lib/pocketbase";

const ActivityGrid = () => {
    const [activity, setActivity] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        activity: { value: null, matchMode: FilterMatchMode.CONTAINS },
        organizer: { value: null, matchMode: FilterMatchMode.CONTAINS },
        datetime: { value: null, matchMode: FilterMatchMode.CONTAINS },
        room: { value: null, matchMode: FilterMatchMode.CONTAINS },
        numberpeople: { value: null, matchMode: FilterMatchMode.EQUALS },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [statuses] = useState(['waiting_validation', 'waiting_support', 'waiting_planification', 'accepted', 'refused']);

    const getSeverity = (status) => {
        switch (status) {
            case 'refused':
                return 'danger';
            case 'accepted':
                return 'success';
            case 'waiting_validation':
                return 'info';
            case 'waiting_support':
                return 'warning';
            case 'waiting_planification':
                return 'warning';
            case 'renewal':
                return null;
        }
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} style={{width: "100%"}} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} style={{width: "100%"}} severity={getSeverity(option)} />;
    };
    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Choisir" className="p-column-filter" showClear />
        );
    };

    const header = renderHeader();

    useEffect(() => {
        if (activity == null) {
            fetchActivities().then((data) => {
                console.log(data[0])
                setActivity(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }, []);

    if (activity != null && activity.length === 0) {
        return (
            <div>
                <p>Aucune activité.</p>
            </div>
        );
    }

    return (
        <PrimeReactProvider value={{ unstyled: false }}>
            <div className={style.pDatatable}>
                <DataTable value={activity} paginator rows={10}  dataKey="id" filters={filters} filterDisplay="row" showGridlines header={header} emptyMessage="Aucune activité." loading={loading}>
                    <Column field="title" header="Activité" alignHeader={"center"} bodyStyle={{ textAlign: "center"}} style={{width: "20%"}} filter filterPlaceholder="Rechercher" />
                    <Column field="organizer" header="Organisateur" alignHeader={"center"} bodyStyle={{ textAlign: "center"}} style={{width: "20%"}} filter filterPlaceholder="Rechercher" />
                    <Column field="datetime" header="Date & Heure" alignHeader={"center"} bodyStyle={{ textAlign: "center"}} style={{width: "20%"}} filter filterPlaceholder="Rechercher" />
                    <Column field="room" header="Salle" alignHeader={"center"} bodyStyle={{ textAlign: "center"}} style={{width: "20%"}} filter filterPlaceholder="Rechercher" />
                    <Column field="nbPlace" header="Nombre de personnes" alignHeader={"center"} bodyStyle={{ textAlign: "center"}} style={{width: "20%"}} filter filterPlaceholder="Rechercher" />
                    <Column field="status" header="Status" showFilterMenu={false} alignHeader={"center"} bodyStyle={{ textAlign: "center", width: "100%"}} style={{width: "100%"}} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                </DataTable>
            </div>
        </PrimeReactProvider>
    );
}

export default ActivityGrid;