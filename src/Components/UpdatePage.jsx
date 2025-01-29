import React, { useState } from "react";
import { Card, CardContent, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

export default function UpdatePage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [password, setPassword] = useState("");
  const [hasWriteAccess, setHasWriteAccess] = useState(false);

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        { id: Date.now(), content: newPost.trim(), updated: false },
      ]);
      setNewPost("");
    }
  };

  const handleUpdatePost = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, updated: true } : post
    );
    setPosts(updatedPosts);
  };

  const handlePasswordSubmit = () => {
    const correctPassword = "your_password"; // Change this to your desired password
    if (password === correctPassword) {
      setHasWriteAccess(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Update Your Posts
      </motion.h1>

      {!hasWriteAccess ? (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl mb-6">
          <TextField
            fullWidth
            variant="outlined"
            label="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mb-4"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePasswordSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Submit
          </Button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            multiline
            rows={3}
            className="mb-4"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddPost}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Add Post
          </Button>
        </div>
      )}

      <div className="mt-6 space-y-4 max-w-2xl mx-auto">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="p-4 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <CardContent>
              <p className="text-gray-700 mb-4">{post.content}</p>
              {!post.updated ? (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleUpdatePost(post.id)}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md"
                >
                  Mark as Updated
                </Button>
              ) : (
                <p className="text-green-600 font-medium">Updated ✔️</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
