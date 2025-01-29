import React, { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function UpdatePage() {
  const [posts, setPosts] = useState([
    { id: 1, content: "First post", updated: false },
    { id: 2, content: "Second post", updated: true },
  ]);

  const handleUpdatePost = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, updated: true } : post
    );
    setPosts(updatedPosts);
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
