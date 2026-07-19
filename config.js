window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8a491b7f3412fb11fcf822161bc4d96285a77d9c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8a491b7f3412fb11fcf822161bc4d96285a77d9c/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
