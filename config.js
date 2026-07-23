window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/67312a99a1e11f229f2fddbc51b85d3afd836903/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/67312a99a1e11f229f2fddbc51b85d3afd836903/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
