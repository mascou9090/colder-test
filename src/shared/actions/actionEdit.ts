export const actionPatchRequest = async (id: number, title: string, content: string) => {
  const data = {
    title: title,
    content: content
  }
  try {
    const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    return response;
  } catch(e) {
    console.log(`Error: ${e}`);
  }
}
