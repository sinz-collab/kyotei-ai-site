window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0091795b40fe2a0c0422fa0196cbfb9de74c01df/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/0091795b40fe2a0c0422fa0196cbfb9de74c01df/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
