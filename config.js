window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/65f956a55af8a35b49fc049fb546897943f9b52c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/65f956a55af8a35b49fc049fb546897943f9b52c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
