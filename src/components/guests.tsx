import React, { useContext, useEffect } from 'react';
import GuestContext from '../adapters/contexts/GuestContext';
import MaterialTable from 'material-table';

const Guests = () => {
    const guestsContext = useContext(GuestContext);
    const { guestList, getGuest} = guestsContext;

    useEffect(() => {
        const fn = getGuest
        if (fn) {
            fn()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            {
                guestList && guestList.length ?
                <MaterialTable
                    columns={
                        [
                            {title: 'Nombre', field: 'name'},
                            {title: 'Primer apellido', field: 'surname1'},
                            {title: 'Segundo apellido', field: 'surname2'},
                            {title: 'Añadido', field: 'created'},
                            {title: 'Edad', field: 'age'},
                            {title: 'Menu', field: 'menu'},
                            {title: 'Alergias', field: 'allergies'},
                            {title: 'Bus', field: 'bus'}
                        ]
                    }
                    data={guestList}
                    title="Listado de invitados"
                />
                : null
            }
        </div>
        
    )
}

export default Guests