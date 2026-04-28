export function createPageUrl(pageName: string): string {
  if (!pageName) return "/";

  return (
    "/" +
    pageName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")       // مسافات → -
      .replace(/[^\w-]+/g, "")    // حذف الرموز الغريبة
  );
}