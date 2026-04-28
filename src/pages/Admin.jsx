import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plus,
  Trash2,
  Save,
  ArrowLeft,
  ExternalLink,
  Image,
} from "lucide-react";
import { Link } from "react-router-dom";

const EMPTY_PROJECT = {
  id: null,
  title: "",
  description: "",
  live_url: "",
  source_url: "",
  image_url: "",
  tech_stack: [],
  category: "frontend",
  order: 0,
};

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_PROJECT);
  const [techInput, setTechInput] = useState("");

  // تحميل المشاريع من localStorage
  useEffect(() => {
    const saved = localStorage.getItem("projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  // حفظ المشاريع
  const saveProjects = (data) => {
    setProjects(data);
    localStorage.setItem("projects", JSON.stringify(data));
  };

  const resetForm = () => {
    setEditing(null);
    setForm(EMPTY_PROJECT);
    setTechInput("");
  };

  const handleEdit = (project) => {
    setEditing(project.id);
    setForm(project);
  };

  const handleSave = () => {
    if (!form.title) return;

    if (editing) {
      const updated = projects.map((p) =>
        p.id === editing ? { ...form } : p
      );
      saveProjects(updated);
    } else {
      const newProject = { ...form, id: Date.now() };
      saveProjects([...projects, newProject]);
    }

    resetForm();
  };

  const handleDelete = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    saveProjects(updated);
  };

  const addTech = () => {
    if (techInput.trim() && !form.tech_stack.includes(techInput)) {
      setForm({
        ...form,
        tech_stack: [...form.tech_stack, techInput.trim()],
      });
      setTechInput("");
    }
  };

  const removeTech = (tech) => {
    setForm({
      ...form,
      tech_stack: form.tech_stack.filter((t) => t !== tech),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 border rounded">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>
                {editing ? "Edit Project" : "New Project"}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <Input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <Textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <Input
                placeholder="Live URL"
                value={form.live_url}
                onChange={(e) =>
                  setForm({ ...form, live_url: e.target.value })
                }
              />

              <Input
                placeholder="Image URL"
                value={form.image_url}
                onChange={(e) =>
                  setForm({ ...form, image_url: e.target.value })
                }
              />

              {/* Category */}
              <Select
                value={form.category}
                onValueChange={(v) =>
                  setForm({ ...form, category: v })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="fullstack">Fullstack</SelectItem>
                </SelectContent>
              </Select>

              {/* Tech */}
              <div>
                <div className="flex gap-2">
                  <Input
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                  />
                  <Button onClick={addTech}>
                    <Plus />
                  </Button>
                </div>

                <div className="flex gap-1 mt-2">
                  {form.tech_stack.map((t) => (
                    <span
                      key={t}
                      onClick={() => removeTech(t)}
                      className="cursor-pointer text-xs border px-2"
                    >
                      {t} ×
                    </span>
                  ))}
                </div>
              </div>

              <Button onClick={handleSave}>
                <Save className="mr-1" />
                {editing ? "Update" : "Create"}
              </Button>
            </CardContent>
          </Card>

          {/* List */}
          <div className="lg:col-span-3 space-y-2">
            {projects.map((p) => (
              <Card key={p.id}>
                <CardContent className="p-3 flex justify-between items-center">
                  <div>
                    <h3>{p.title}</h3>
                    {p.live_url && (
                      <a href={p.live_url} target="_blank">
                        <ExternalLink />
                      </a>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => handleEdit(p)}>
                      Edit
                    </Button>

                    <Button onClick={() => handleDelete(p.id)}>
                      <Trash2 />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}