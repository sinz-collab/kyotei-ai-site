window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ed48ef7c946cc10a47d9483d49e8c0072056974d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ed48ef7c946cc10a47d9483d49e8c0072056974d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
