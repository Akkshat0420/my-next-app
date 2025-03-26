"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar1 from "../navbar";

export default function WhitepapersPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Your paper has been submitted for review!");
    setTitle("");
    setDescription("");
    setImage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const publishedArticles = [
    {
      id: 1,
      title: "The Future of Cybersecurity",
      image: "/images/cybersecurity.webp",
      description: "An in-depth analysis of emerging cybersecurity trends and threats...",
      category: "Cybersecurity",
    },
    {
      id: 2,
      title: "Understanding Zero Trust Architecture",
      image: "/images/zero-trust.webp",
      description: "A comprehensive guide to Zero Trust security models...",
      category: "Network Security",
    },
    {
      id: 3,
      title: "AI and Cybersecurity",
      image: "/images/ai-cyber.webp",
      description: "Exploring how AI is reshaping the cybersecurity landscape...",
      category: "Artificial Intelligence",
    },
  ];

  return (
    <><Navbar1/>
    <div className="mx-auto px-4 py-8 bg-gradient-to-br from-[#27364bcf] to-[#112240] text-white min-h-screen">
    <h2 className="text-4xl font-bold text-[#CCD6F6] mt-12 mb-6 text-center">Published Articles by Cybr4X</h2>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {publishedArticles.filter(article => article.title.toLowerCase().includes(search.toLowerCase())).map((article) => (
          <div key={article.id} className="bg-[#3a3f48] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#a1c6da]">{article.title}</h3>
              <p className="text-gray-400 mt-2">{article.description.slice(0, 100)}...</p>
              {/* <span className="text-sm bg-[#4f9bff] text-[#0A192F] px-2 py-1 rounded mt-2 inline-block">{article.category}</span> */}
              <Link href={`/article/${article.id}`} className="text-[#447e2c] font-semibold mt-4 inline-block hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-4xl font-bold text-[#CCD6F6] mb-6 text-center pt-16">Submit Your Whitepaper / Blog</h2>
      <div className="max-w-2xl mx-auto bg-[#3a3f48] p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 bg-[#0D2538] text-white border border-[#4FC1FF] rounded-lg focus:ring focus:ring-[#4FC1FF]"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-[#0D2538] text-white border border-[#2c9a81] rounded-lg focus:ring focus:ring-[#4FC1FF]"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-white border border-[#4FC1FF] rounded-lg py-2 px-3 bg-[#0D2538]"
          />
          <button type="submit" className="w-full bg-[#296d92] text-[#0A192F] px-4 py-2 rounded-lg hover:bg-[#3A9ECF] transition-all">
            Submit for Review
          </button>
        </form>
      </div>

      
    </div>
    </>
  );
}
