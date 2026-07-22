window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4ae57ac4690ee7e19766b9a797dd0dd33fc93e9a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4ae57ac4690ee7e19766b9a797dd0dd33fc93e9a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
