#![deny(clippy::all)]

use napi::bindgen_prelude::*;
use napi_derive::napi;
// use std::collections::HashMap;
// use serde_json::Value;
use serde::Deserialize;

#[napi(object)]
#[derive(Debug, Deserialize)]
pub struct UmaCharacter {
    pub birth_day: u32,
    pub birth_month: u32,

    pub category_label: String,
    pub category_label_en: String,
    pub category_value: String,

    pub color_main: String,
    pub color_sub: String,

    pub date_gmt: String,

    pub detail_img_pc: Option<String>,
    pub detail_img_sp: Option<String>,

    pub ears_fact: Option<String>,
    pub family_fact: Option<String>,

    pub game_id: u32,
    pub grade: Option<String>,
    pub height: u32,
    pub id: u32,

    pub link: String,
    pub modified_gmt: String,

    pub name_en: String,
    pub name_en_internal: String,
    pub name_jp: String,
    pub preferred_url: String,

    pub profile: Option<String>,
    pub residence: Option<String>,

    pub row_number: u32,
    pub shoe_size: Option<String>,
    pub site_idx: u32,

    pub size_b: u32,
    pub size_h: u32,
    pub size_w: u32,

    pub slogan: Option<String>,

    pub sns_header: Option<String>,
    pub sns_icon: Option<String>,

    pub strengths: Option<String>,
    pub tail_fact: Option<String>,

    pub thumb_img: Option<String>,
    pub voice: Option<String>,
    pub weaknesses: Option<String>,
    pub weight: Option<String>,
}

//#[napi]
//returns uma unfo in json
// pub async fn uma_fetch(id: u32) -> Result<UmaCharacter> {
//     let url = format!("https://umapyoi.net/api/v1/character/{id}");

//     let response = reqwest::get(url)
//         .await
//         .map_err(|e| Error::from_reason(format!("Request failed: {e}")))?;

//     let text = response
//         .text()
//         .await
//         .map_err(|e| Error::from_reason(format!("Reading response failed: {e}")))?;

//     let uma: UmaCharacter = serde_json::from_str(&text)
//         .map_err(|e| Error::from_reason(format!("JSON decode failed: {e}")))?;

//     Ok(uma)
// }

#[napi]
pub async fn uma_fetch(id: u32) -> Result<UmaCharacter> {
    let url = format!("https://umapyoi.net/api/v1/character/{id}");

    let response = reqwest::get(url)
        .await
        .map_err(|e| Error::from_reason(format!("Request failed: {e}")))?;

    let text = response
        .text()
        .await
        .map_err(|e| Error::from_reason(format!("Reading response failed: {e}")))?;

    let uma: UmaCharacter = serde_json::from_str(&text)
        .map_err(|e| Error::from_reason(format!("JSON decode failed: {e}")))?;

    Ok(uma)
}
