import React, { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aiImage from "../assets/ai.jpg"; 

export default function UpdatePage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      content:
        "DeepSeek vs. ChatGPT: A Battle of AI Giants! DeepSeek is a powerful language model designed for high-level comprehension, while ChatGPT is known for its conversational fluency and widespread application. Who wins? Let's explore!",
      updated: false,
      image: aiImage, // Use the imported image
      video: "https://media.giphy.com/media/3o6Zt481isNVuWrDLa/giphy.gif",
    },
  ]);

  const handleUpdatePost = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, updated: true } : post
    );
    setPosts(updatedPosts);
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <h1 className="text-center text-bold-500  text-[50px] underline m-2">
        Blogs and posts{" "}
      </h1>
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        DeepSeek vs. ChatGPT
      </motion.h1>

      <div className="mt-6 space-y-4 max-w-4xl mx-auto">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="p-4 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <CardContent>
              <img
                src={post.image}
                alt="AI comparison"
                className="w-full h-auto object-cover rounded-md mb-4"
                style={{ maxHeight: "400px" }}
              />
              <p className="text-gray-700 text-bold underline mb-4">{post.content}</p>
              <img
                src={post.video}
                alt="Funny AI reaction"
                className="w-full h-auto object-cover rounded-md mt-4"
                style={{ maxHeight: "400px" }}
              />
              {/* {!post.updated ? (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleUpdatePost(post.id)}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md"
                >
                  Mark as Updated
                </Button>
              ) : (
                <p className="text-green-600 font-medium"></p>
              )} */}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button
          variant="contained"
          color="primary"
          onClick={handleReturnHome}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}

