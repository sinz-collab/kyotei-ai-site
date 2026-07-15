window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c405516fb587efd2ac1fdce8f25752a6eeec3bb1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/c405516fb587efd2ac1fdce8f25752a6eeec3bb1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
