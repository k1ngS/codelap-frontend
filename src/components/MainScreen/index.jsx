import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useUser } from "../../context/UserContext";
import { useDeletePost, usePosts, useUpdatePost } from "../../hooks/usePosts";
import { formatTimeAgo } from "../../lib/utils";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";
import Header from "../Header";
import PostForm from "../PostForm";
import * as S from "./styles";
import {
	PostActions,
	PostContent,
	PostHeader,
	PostItem,
	PostList,
} from "./styles";

const MainScreen = () => {
	const { data: posts, isLoading } = usePosts();
	const { username } = useUser();
	const deletePost = useDeletePost();
	const updatePost = useUpdatePost();

	const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
	const [postToDelete, setPostToDelete] = useState(null);

	const [isEditModalOpen, setEditModalOpen] = useState(false);
	const [postToEdit, setPostToEdit] = useState(null);

	// --- DELETE POST HANDLERS ---
	const handleDeletePost = (postId) => {
		setPostToDelete(postId);
		setDeleteModalOpen(true);
	};

	const handleCloseDeleteModal = () => setDeleteModalOpen(false);
	const handleConfirmDelete = () => {
		if (postToDelete) {
			deletePost.mutate(postToDelete, { onSuccess: handleCloseDeleteModal });
		}
	};

	// --- EDIT POST HANDLERS ---
	const handleEditPost = (post) => {
		setPostToEdit(post);
		setEditModalOpen(true);
	};

	const handleCloseEditModal = () => setEditModalOpen(false);
	const handleSaveEdit = (updatedPost) => {
		if (postToEdit) {
			updatePost.mutate(
				{ id: postToEdit.id, data: updatedPost },
				{
					onSuccess: handleCloseEditModal,
				},
			);
		}
	};

	return (
		<>
			<S.Container>
				<Header />
				<S.ContentWrapper>
					<S.Content>
						<PostForm />

						{isLoading && <p>Loading posts...</p>}

						<PostList>
							{posts?.map((post) => (
								<PostItem key={post?.id}>
									<PostHeader>
										<h2>{post?.title}</h2>
										{post?.username === username && (
											<PostActions>
												<button
													type="button"
													onClick={() => handleDeletePost(post?.id)}
												>
													<FaTrash color="white" />
												</button>
												<button
													type="button"
													onClick={() => handleEditPost(post)}
												>
													<FaEdit color="white" />
												</button>
											</PostActions>
										)}
									</PostHeader>
									<PostContent>
										<div className="post-meta">
											<span>@{post?.username}</span>
											<span>{formatTimeAgo(post?.created_datetime)}</span>
										</div>
										<p>{post?.content}</p>
									</PostContent>
								</PostItem>
							))}
						</PostList>
					</S.Content>
				</S.ContentWrapper>
			</S.Container>

			<DeleteModal
				isOpen={isDeleteModalOpen}
				onCancel={handleCloseDeleteModal}
				onConfirm={handleConfirmDelete}
				isDeleting={deletePost.isLoading}
			/>

			<EditModal
				isOpen={isEditModalOpen}
				onCancel={handleCloseEditModal}
				onSave={handleSaveEdit}
				post={postToEdit}
				isUpdating={updatePost.isLoading}
			/>
		</>
	);
};

export default MainScreen;
