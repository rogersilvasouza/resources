//: Playground - noun: a place where people can play

struct Estado {
    var name: String
    var abbreviation: String
    var initials: String
}

var estados = [ Int: Estado ]()

estados[1]  = Estado(name: "Acre",                abbreviation: "Acre",             initials: "AC")
estados[2]  = Estado(name: "Alagoas",             abbreviation: "Alagoas",          initials: "AL")
estados[3]  = Estado(name: "Amapá",               abbreviation: "Amapá",            initials: "AP")
estados[4]  = Estado(name: "Amazonas",            abbreviation: "Amazonas",         initials: "AM")
estados[5]  = Estado(name: "Bahia",               abbreviation: "Bahia",            initials: "BA")
estados[6]  = Estado(name: "Ceará",               abbreviation: "Ceará",            initials: "CE")
estados[7]  = Estado(name: "Distrito Federal",    abbreviation: "Distrito Federal", initials: "DF")
estados[8]  = Estado(name: "Espírito Santo",      abbreviation: "Espírito Santo",   initials: "ES")
estados[9]  = Estado(name: "Goiás",               abbreviation: "Goiás",            initials: "GO")
estados[10] = Estado(name: "Maranhão",            abbreviation: "Maranhão",         initials: "MA")
estados[11] = Estado(name: "Mato Grosso",         abbreviation: "Mato G.",          initials: "MT")
estados[12] = Estado(name: "Mato Grosso do Sul",  abbreviation: "Mato G. do Sul",   initials: "MS")
estados[13] = Estado(name: "Minas Gerais",        abbreviation: "Minas Gerais",     initials: "MG")
estados[14] = Estado(name: "Pará",                abbreviation: "Pará",             initials: "PA")
estados[15] = Estado(name: "Paraíba",             abbreviation: "Paraíba",          initials: "PB")
estados[16] = Estado(name: "Paraná",              abbreviation: "Paraná",           initials: "PR")
estados[17] = Estado(name: "Pernambuco",          abbreviation: "Pernambuco",       initials: "PE")
estados[18] = Estado(name: "Piauí",               abbreviation: "Piauí",            initials: "PI")
estados[19] = Estado(name: "Rio de Janeiro",      abbreviation: "Rio de Janeiro",   initials: "RJ")
estados[20] = Estado(name: "Rio Grande do Norte", abbreviation: "Rio G. do Norte",  initials: "RN")
estados[21] = Estado(name: "Rio Grande do Sul",   abbreviation: "Rio G. do Sul",    initials: "RS")
estados[22] = Estado(name: "Rondônia",            abbreviation: "Rondônia",         initials: "RO")
estados[23] = Estado(name: "Roraima",             abbreviation: "Roraima",          initials: "RR")
estados[24] = Estado(name: "Santa Catarina",      abbreviation: "Santa Catarina",   initials: "SC")
estados[25] = Estado(name: "São Paulo",           abbreviation: "São Paulo",        initials: "SP")
estados[26] = Estado(name: "Sergipe",             abbreviation: "Sergipe",          initials: "SE")
estados[27] = Estado(name: "Tocantins",           abbreviation: "Tocantins",        initials: "TO")

for estado in estados {
    
    print(estado)
    
}