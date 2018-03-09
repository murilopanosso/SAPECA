import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';
export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Home' icon='home' />
        <MenuItem path='#/AboutTeam' label='Sobre' icon='info-circle' />
      
    </ul>
)