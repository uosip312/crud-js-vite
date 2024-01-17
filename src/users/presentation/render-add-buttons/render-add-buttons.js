import usersStore from '../../store/users-store';
import { showModal } from '../render-modal/render-modal';
import { renderTable } from '../render-table/render-table';
import './render-add-buttons.css'

/**
 * @param {HTMLDivElement} element
 */
export const renderAddButtons = ( element ) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append( fabButton );

    //TODO:
    fabButton.addEventListener('click', () => {
        showModal()
    });
}