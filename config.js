window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4ac6a533509ca9b063c50d9ae22ac67054374ef9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4ac6a533509ca9b063c50d9ae22ac67054374ef9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
