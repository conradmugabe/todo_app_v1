import { useOutletContext } from 'react-router-dom';
import { Note } from '../entity/Notes';

export default () => useOutletContext<Note>();
