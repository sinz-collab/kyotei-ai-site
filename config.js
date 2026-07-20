window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/15730d5a22d95c6129333119e25dedbc275d37f9/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/15730d5a22d95c6129333119e25dedbc275d37f9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
