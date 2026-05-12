import { useState, useEffect } from 'react';

export const useSnippets = () => {
  // LocalStorage'dan verileri çekerek başlangıç state'ini oluşturuyoruz
  const [snippets, setSnippets] = useState(() => {
    const savedSnippets = localStorage.getItem("savedSnippets");
    return savedSnippets ? JSON.parse(savedSnippets) : [];
  });

  // Form alanları için state yönetimi
  const [titleValue, setTitleValue] = useState("");
  const [tagValue, setTagValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [languageValue, setLanguageValue] = useState("Other");
  const [editingId, setEditingId] = useState(null);

  // Snippet listesi her değiştiğinde LocalStorage'ı günceller
  useEffect(() => {
    localStorage.setItem("savedSnippets", JSON.stringify(snippets));
  }, [snippets]);

  const clearForm = () => {
    setTitleValue("");
    setContentValue("");
    setTagValue("");
    setLanguageValue("Other");
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!titleValue || !contentValue) return;

    const tagsArray = tagValue.split(",").map(tag => tag.trim()).filter(tag => tag !== "");

    if (editingId) {
      // Düzenleme modu
      setSnippets(prev => prev.map(snip =>
        snip.id === editingId ? 
        { ...snip, 
          title: titleValue, 
          content: contentValue, 
          language: languageValue, 
          tags: tagsArray 
        } : snip
      ));
      setEditingId(null);
    } else {
      // Yeni ekleme modu
      const newSnippet = {
        id: crypto.randomUUID(),
        title: titleValue,
        content: contentValue,
        language: languageValue,
        tags: tagsArray.length > 0 ? tagsArray : ["..."],
        createdAt: new Date().toISOString(),
      };
      setSnippets(prev => [newSnippet, ...prev]);
    }
    clearForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Bu kod parçacığını silmek istediğinize emin misiniz?")) {
      setSnippets(prev => prev.filter(s => s.id !== id));
    }
  };

  // Kart üzerindeki düzenle butonuna basıldığında form alanlarını doldurur
  const handleEdit = (snippet) => {
    setEditingId(snippet.id);
    setTitleValue(snippet.title);
    setTagValue(snippet.tags.join(", "));
    setContentValue(snippet.content);
    setLanguageValue(snippet.language);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    snippets,
    formState: { titleValue, tagValue, contentValue, languageValue, editingId },
    setters: { setTitleValue, setTagValue, setContentValue, setLanguageValue },
    actions: { handleSubmit, handleDelete, handleEdit, clearForm }
  };
};
