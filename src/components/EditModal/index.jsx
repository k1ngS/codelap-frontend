import { useEffect, useState } from "react";
import * as S from "./styles";

const EditModal = ({ isOpen, onCancel, onSave, post, isUpdating }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setContent(post.content);
		}
	}, [post]);

	if (!isOpen) {
		return null;
	}

	const handleSave = () => {
		if (title.trim() && content.trim()) {
			onSave({ title: title.trim(), content: content.trim() });
		}
	};

	const isSaveDisabled = !title.trim() || !content.trim() || isUpdating;

	return (
		<S.Overlay>
			<S.Container>
				<S.Title>Edit item</S.Title>
				<S.Form>
					<S.InputGroup>
						<S.Label>Title</S.Label>
						<S.Input
							type="text"
							placeholder="Hello world"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</S.InputGroup>
					<S.InputGroup>
						<S.Label>Content</S.Label>
						<S.TextArea
							placeholder="Content here"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</S.InputGroup>
				</S.Form>
				<S.Actions>
					<S.Button variant="cancel" onClick={onCancel}>
						Cancel
					</S.Button>
					<S.Button
						variant="save"
						onClick={handleSave}
						disabled={isSaveDisabled}
					>
						{isUpdating ? "Saving..." : "Save"}
					</S.Button>
				</S.Actions>
			</S.Container>
		</S.Overlay>
	);
};

export default EditModal;
