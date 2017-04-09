#Adicionar chave rsa
ssh-keygen -t rsa -C "rogersilvasouza@hotmail.com"

#Visulizar Chave publica
cat ~/.ssh/id_rsa.pub

#iniciar repositorio
git init

#Clonar repositorio
git clone https://github.com/jcfonsecagit/repositorio.git

#setar usuario local
git config --global user.name "Roger Souza"
git config --global user.email rogersilvasouza@hotmail.com

# Adicionar origin
git remote add origin endereco
git remote -v #ver todos os endereços remotos 

#ver status do repositorio
git status

#ver todos os arquivos relacionados ao diretorio
git ls-files

#ver log do repositorio
git log

#ver o que mudou no repositorio
git whatchanged
git whatchanged -p #ver tudo que mudou

#ver branchs
git branch
git branch -r #apenas branchs remotas
git branch -a #todas as branchs incluido remotas
git brach nomedabranch
git push -d origin nomedabranch #remove branch

# Adicionar arquivo ao stage
git add arquivo
git add -i # Adicionar de forma interativa u numero q

# Mensagem de commit
git commit -m "Criando projeto"

# Ver todas as tags
git tag

# Mudar de Tag
git tag nomedatag

# Criar branch já fazendo checkout e linkando com a origin
git checkout -t origin/nomedabranch

# Push link o local com o remoto
git push -u origin master

# git ver alteracoes linha a linha e quem fez a alteração
git blame public/index.html

#ver atualizações no repositorio remoto
git fetch origin

# resetar uma alteração do antes de commitar
git reset HEAD nomedoarquivo.extensao

# revert para um commit
git revert hashdocommit

# parar um stage e guardar no stash
git stash
git stash list #tudo que está no stash
git stash pop  #retorna ao ponto que vc parou
git stash drop #destroi o stash

# git bisect para encontrar problemas vai vendo commit a commit
git bisect start
git bisect bad HEAD # Commit atual que não funciona
git bisect good hashdocommit # Commit que funciona
git bisect bad
git bisect good

