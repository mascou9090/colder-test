export const actionPostRequest = async (data: any) => {
  
  try {
    const response = await fetch("https://dev.codeleap.co.uk/careers/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    const json = await response.json();
    return json;
  } catch(e) {
    console.log(`Error: ${e}`);
  }
}