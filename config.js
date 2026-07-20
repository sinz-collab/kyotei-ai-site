window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0487e4e8bc956090cac7faf87d2a4f4e28d11beb/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0487e4e8bc956090cac7faf87d2a4f4e28d11beb/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
