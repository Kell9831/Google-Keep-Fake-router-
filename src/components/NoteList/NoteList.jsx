import clsx from "clsx";
import styles from "./styles.module.css";
import Note from "../Note/Note";
import { useRouteLoaderData } from "react-router-dom";

function NoteList({ className, isTrash }) {
  const { activeNotes, deletedNotes } = useRouteLoaderData("app");

  const notes = isTrash ? deletedNotes : activeNotes;

  const containerClassNames = clsx(className, styles.container);

  if (notes.length === 0) {
    return <p className={styles.empty}>No notes</p>;
  }

  return (
    <div className={containerClassNames}>
      {notes.map((note) => (
        <Note key={note.id} note={note} isTrash={isTrash} />
      ))}
    </div>
  );
}

export default NoteList;
