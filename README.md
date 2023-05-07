# Website
平良玻寧 4421

## インストール方法
1. リポジトリを持ってくる
```
git pull https://github.com/ine-OvF/Website.git
```
2. ディレクトリ移動
```
cd Website/assets
```
3. ライブラリインストール
```
npm install
```
4. .envファイルの配置場所
- 1つ目
/Websiteに置いてください
```
ROOT_PASS=root
DB_NAME=ine-db
DB_USER=user
DB_PASS=p@ssw0rd
DB_PORT=3306
TZ=Asia/Tokyo
```
- 2つ目
/assetsに置いてください
```
apiKey="AIzaSyCwllltXU9CZc2QD8hH5x2mQPJddINKi8w",
authDomain="ine-project-4aee3.firebaseapp.com",
projectId="ine-project-4aee3",
storageBucket="ine-project-4aee3.appspot.com",
messagingSenderId="310537717552",
appId="1:310537717552:web:6ce94c8f9139488550eaf5",
measurementId="G-62MQ1BPQ83"
```
5. コンテナ開始
```
docker compose up
```
