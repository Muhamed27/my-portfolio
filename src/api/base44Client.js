// src/api/base44Client.js

// تم حذف base44 بالكامل
// يمكنك لاحقًا إضافة API خاص بك هنا (مثل fetch أو axios)

export const apiClient = {
  get: async (url) => {
    const res = await fetch(url);
    return res.json();
  },

  post: async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },
};