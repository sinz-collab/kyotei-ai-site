window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/977aecb833109e9b0fc77666653c86ebebdce5d3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/977aecb833109e9b0fc77666653c86ebebdce5d3/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
