import { useOutletContext } from 'react-router-dom';
import { Note } from '../../app/core/entities/note';

export default () => useOutletContext<Note>();
