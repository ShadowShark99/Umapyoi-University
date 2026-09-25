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

    pub detail_img_pc: String,
    pub detail_img_sp: String,

    pub ears_fact: String,
    pub family_fact: String,

    pub game_id: u32,
    pub grade: String,
    pub height: u32,
    pub id: u32,

    pub link: String,
    pub modified_gmt: String,

    pub name_en: String,
    pub name_en_internal: String,
    pub name_jp: String,
    pub preferred_url: String,

    pub profile: String,
    pub residence: String,

    pub row_number: u32,
    pub shoe_size: String,
    pub site_idx: u32,

    pub size_b: u32,
    pub size_h: u32,
    pub size_w: u32,

    pub slogan: String,

    pub sns_header: String,
    pub sns_icon: String,

    pub strengths: String,
    pub tail_fact: String,

    pub thumb_img: String,
    pub voice: String,
    pub weaknesses: String,
    pub weight: String,
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
pub async fn uma_fetch(id: u32) -> Result<String> {
    let url = format!("https://umapyoi.net/api/v1/character/{id}");

    let response = reqwest::get(url)
        .await
        .map_err(|e| Error::from_reason(format!("Request failed: {e}")))?;

    response
        .text()
        .await
        .map_err(|e| Error::from_reason(format!("Reading response failed: {e}")))
}
