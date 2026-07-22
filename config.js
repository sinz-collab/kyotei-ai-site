window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f333a3411388a5e8df2d1085e74eec6d5d2b30ef/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f333a3411388a5e8df2d1085e74eec6d5d2b30ef/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
