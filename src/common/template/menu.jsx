import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';
export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Home' icon='home' />
        <MenuTree label='Sobre' icon='info-circle'>
            <MenuItem path='#/AboutApp'
                      label='Sobre o SAPECA' icon='' />
            <MenuItem path='#/AboutTeam'
                      label='Sobre a equipe' icon='' />
        </MenuTree>
    </ul>
)