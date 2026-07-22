window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fd0986237c1f86886a18e1f44f29a8fe1fc4e3fe/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/fd0986237c1f86886a18e1f44f29a8fe1fc4e3fe/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
