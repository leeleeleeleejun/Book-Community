const handleApiResponse = async (response: Response) => {
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error);
  } else {
    alert(result.message);
  }
  return result;
};

export default handleApiResponse;
