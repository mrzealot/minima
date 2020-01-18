# Theme development workflow

1. change to the develop branch
    - `git checkout develop`
    - `remote_theme: mrzealot/minima@develop` into `_config.yml`

2. do all the things
    - periodic commit with `git commit -am "dummy commit" && git push`

3. transfer stuff to master
    - `git checkout master`
    - `git merge --squash develop`
    - `git commit -am "<REAL COMMIT MESSAGE>" && git push`

4. reset develop to current master
    - `git checkout develop && git reset --hard master && git checkout master`