import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [expand, setExpand] = useState(false);

	const [note, setNote] = useState({
		title: "",
		content: ""
	});

	function handleClick() {
		setExpand(true);
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: ""
		});
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note">
				{expand && (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}

				<textarea
					name="content"
					onChange={handleChange}
					onClick={handleClick}
					value={note.content}
					placeholder="Take a note..."
					rows={expand ? 3 : 1}
				/>
				<Zoom in={expand ? true : false}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
