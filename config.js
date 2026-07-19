window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a6d9d81873b70cac4d38bdddac46592502eb7be/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0a6d9d81873b70cac4d38bdddac46592502eb7be/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
