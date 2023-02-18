# Recipe-App  - Commandes GIT
<p>&nbsp;</p>

## Convention de nommage des commits

|terms |Description |
| :--------------- | :-----|
|build |Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)|
|ci |Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)|
|docs |Documentation only changes|
|feat |A new feature|
|fix |A bug fix|
|perf |A code change that improves performance|
|refactor| A code change that neither fixes a bug nor adds a feature|
|style |Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)|
|test |Adding missing tests or correcting existing tests|

<p>&nbsp;</p>

## Commandes GIT
<p>&nbsp;</p>

### Création d'une branche de fonctionnalité
```bash
git checkout develop
git checkout -b <nom-de-la-feature>
```
<p>&nbsp;</p>


### mise à jour d'une branche de fonctionnalité
```bash
git add .
git commit -m "votre_commit"
git push origin <nom-de-la-branche>
```
<p>&nbsp;</p>


### Terminer une branche de fonctionnalité
```bash
git checkout develop
git merge nom-de-la-feature
```
<p>&nbsp;</p>

### Récupéré la branch develop
```bash
git pull develop
```
<p>&nbsp;</p>

### Envoyer la branche develop vers la master 
```bash
git checkout main
git merge develop
```
<p>&nbsp;</p>

### Suppression de la branch d'une feature
```bash
git branch -d feature_branch
```