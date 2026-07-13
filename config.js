window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2a6a5a2582e299fa99e4785547dd321e9ab5bfa7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/2a6a5a2582e299fa99e4785547dd321e9ab5bfa7/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
