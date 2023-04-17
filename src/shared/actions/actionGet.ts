
export const actionGetRequest = async () => {
  try {
    const response = await fetch("https://dev.codeleap.co.uk/careers/");
    return await response.json();
  } catch(e) {
    console.log(`Error: ${e}`);
  }
}
