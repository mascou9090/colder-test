export const actionDeleteRequest = async (id:number) => {
  try {
    const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "DELETE",
    });
    return response;
  } catch(e) {
    console.log(`Error: ${e}`);
  }
}
