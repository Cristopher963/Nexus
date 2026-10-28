// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Nexus: Bienvenido {}", name)
}

#[tauri::command]
  fn lista_apps() -> Vec<String> {
    let aplication: Vec<String> = vec![
        "Antigravity".to_string(),
        "Spotify".to_string(),
        "Visual Studio Code".to_string(),
    ];
    aplication
  }

#[tauri::command]
  fn lista_juegos()-> Vec<String> {
    let games: Vec<String> = vec![
      "Albion Online".to_string(),
      "Genshin Impact".to_string(),
      "Repo".to_string(),
    ];
    games
  }

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, lista_apps, lista_juegos])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
