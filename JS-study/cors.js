const defaultCorsHeaders = {
    // 모든 도메인(*)을 허용한다.
    'access-control-allow-origin': '*',
    // 메소드는 get post delete options만 허용한다.
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    // 헤더에는 content-type과 accept만 쓸 수 있다.
    'access-control-allow-headers': 'content-type, accept',
    // preflight request는 10초까지 허용된다.
    'access-control-max-age': 10 
}