window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e4632059f7f37878f802ecc0ea6c13a775dddcf/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/6e4632059f7f37878f802ecc0ea6c13a775dddcf/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
