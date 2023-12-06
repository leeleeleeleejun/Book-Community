const handleApiResponse = async (response: Response) => {
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error);
  } else {
    if (result.token) {
      localStorage.setItem("token", result.token);
    }
    alert(result.message);
  }
  return response;
};

export default handleApiResponse;
