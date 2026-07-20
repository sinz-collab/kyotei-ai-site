window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/79bf0ff8626630c961ef66ad8f2e8fdd6cbfe6de/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/79bf0ff8626630c961ef66ad8f2e8fdd6cbfe6de/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
