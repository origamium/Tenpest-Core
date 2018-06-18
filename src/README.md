# Infomation  
## `src/Datum`
Datum群は整形されたデータ定義です。APIから取得したデータはDatum群のうちいずれかに収容する必要があります。  
すべてTypescript Interface形式で提供されています。  
  
## `src/API`
### `Category`
Category群は予め定義されたアクションの集合です。後述するUnitクラスによって形成されています。  
  
### `Normalizer`  
Normalizerはstatic classです。プロパティは一切持ちません。  
APIから取得したデータを`Datum`Interfaceのいずれかに変換する役目を持ちます。  
また、変換できなかった場合は`FailedNormalization`Exceptionをスローします。
  
### `Unit`クラス
Unitクラスには以下の役割が定義されています。  
  
* APIへのパス(相対)
* HTTPメソッド
* APIのパラメータ定義
* 取得されるデータの定義（Normalizer関数がデータを変換できるようにします）
  
### `Set`クラス
SetクラスはCategory Interfacesをまとめたクラスです。すべてreadonlyで提供されます。
